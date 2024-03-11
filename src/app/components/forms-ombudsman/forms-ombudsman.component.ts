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




  public unprocessForms(type:TypeToast, titleInfo:string, messageInfo:string) {
    setTimeout(() => {
      this.processingForms = false;
      this.notification.showToast(type,titleInfo, messageInfo);
    }, 2000);
  }

  processForms() {
    this.processingForms = true;
    setTimeout(() => {
      this.processingForms = false;
      this.unprocessForms(TypeToast.Success, 'Successo', 'Obrigado por nos permitir melhorar!');
    }, 1000);
  }
  

  onSubmit(forms: NgForm) {
    this.service.send(forms.value).subscribe(
      (response: HttpResponse<IResponseApi>) => {
        if (response.status === 201) {
          this.processForms();
          
        } else {
          this.unprocessForms(TypeToast.Error, 'Error', 'Erro ao enviar seu formulário ' + response.body?.error);
          
          // Altera o estado de processingForms de volta para false
        }
      },
      (error) => {
        this.unprocessForms(TypeToast.Error, 'Error', 'Não foi possível enviar o seu formulário no momento, tente novamente mais tarde');
        // Altera o estado de processingForms de volta para false
      }
    );
  }
  



}
