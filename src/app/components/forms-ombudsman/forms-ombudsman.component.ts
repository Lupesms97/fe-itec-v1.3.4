import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CurriculoService } from 'src/app/core/services/currciulo.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { OmbudsmanService } from 'src/app/core/services/ombudsman.service';
import { FormsTrabalheConoscoI } from 'src/app/shared/models/FormsTrabalheConoscoI';
import { IOpinions } from 'src/app/shared/models/IOpinions';
import { IResponseApi } from 'src/app/shared/models/IResponseApi';
import { TypeToast } from 'src/app/shared/models/TypeToastE';

@Component({
  selector: 'app-forms-ombudsman',
  templateUrl: './forms-ombudsman.component.html',
  styleUrls: ['./forms-ombudsman.component.css']
})
export class FormsOmbudsmanComponent {
  public processingForms: boolean = false;


  forms: IOpinions = {
    name: '',
    email: '',
    polo: '',
    phone: '',
    course: '',
    lgpd: false,
    message: '',
  }

  constructor(private service: OmbudsmanService, private notification: NotificationService) { }


  ngOnInit(): void {
    window.scroll(0,0);
  }



  processForms() {
    this.processingForms = true;

  }
  public unprocessForms(type:TypeToast, titleInfo:string, messageInfo:string) {
    setTimeout(() => {
      
      this.notification.showToast(type, titleInfo, messageInfo);
      this.processingForms = false;
    }, 2000);

  }

  onSubmit(forms: NgForm) {
    this.service.send(forms.value).subscribe(
      (response) => {
        this.unprocessForms(
          TypeToast.Success,
          'Sucesso',
          'Formulário enviado com sucesso'
        );
        forms.reset();
      },
      (error) => {
        this.unprocessForms(
          TypeToast.Error,
          'Erro',
          'Não foi possivel enviar o formulário no momento'
        );
      },
      () => this.processingForms = false
    );
  }



}
