import { Component, ElementRef, Input, NgZone, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css']
})
export class CountersComponent implements OnInit, OnDestroy {
  counterValue: number = 0;
  isCounterVisible: boolean = false;
  intersectionObserver: IntersectionObserver | undefined;

  constructor(private elementRef: ElementRef, private zone: NgZone) {}

  ngOnInit(): void {
    this.initializeIntersectionObserver();
  }

  ngOnDestroy(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  initializeIntersectionObserver(): void {
    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.zone.run(() => {
            this.isCounterVisible = true;
            this.animateCounter();
            if (this.intersectionObserver) {
              this.intersectionObserver.disconnect(); // Disconecta após o início da animação
            }
          });
        }
      });
    });

    this.intersectionObserver.observe(this.elementRef.nativeElement);
  }
  
  animateCounter(): void {
    const end = 5000; // ou qualquer outro valor até mil que você desejar
    const duration = 2000;
    const interval = duration / end;
  
    let start = 0;
    const timer = setInterval(() => {
      start += 11; // Incremento de 11 em 11
      this.counterValue = start;
      if (start >= end) {
        this.counterValue = end; // Garante que o valor final seja exatamente o end
        clearInterval(timer);
      }
    }, interval);
  }
  
}