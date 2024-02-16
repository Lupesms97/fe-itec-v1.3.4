import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CurriculoService } from 'src/app/core/services/currciulo.service';
import { FormsService } from 'src/app/core/services/forms.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { FormsI } from 'src/app/shared/models/FormsI';
import { FormsTrabalheConoscoI } from 'src/app/shared/models/FormsTrabalheConoscoI';
import { IResponseApi } from 'src/app/shared/models/IResponseApi';
import { TypeToast } from 'src/app/shared/models/TypeToastE';

@Component({
  selector: 'app-trabalhe-conosco',
  templateUrl: './trabalhe-conosco.component.html',
  styleUrls: ['./trabalhe-conosco.component.css']
})
export class TrabalheConoscoComponent implements OnInit {

  public processingForms: boolean = false;
  fileValid:boolean = true;
  messageErrorFile:string = '';

  forms: FormsTrabalheConoscoI = {
    name: '',
    email: '',
    polo: '',
    phone: '',
    setor: '',
    curriculoFile: new File([], ''),
    lgpd: false,
    timeOfExperience: ''
  }

  fileToSend: File = new File([], '');

  constructor(private curriculoService:CurriculoService,private notification:NotificationService) { }


  ngOnInit(): void {
    window.scroll(0,0);
  }

  setores:string[] = [
    'Administrativo',
    'Financeiro',
    'Comercial',
    'Marketing',
    'Tecnologia',
    'Recursos Humanos',
    'Limpeza'
  ];
  timeOfExperience:string[] = [
    
    'Sem experiência',
    'Estágio',
    'Até 1 ano',
    '+1 ano',
    '+3 anos',
    '+5 anos',

  ];

  processForms() {
    this.processingForms = true;

  }
  public unprocessForms(type:TypeToast, titleInfo:string, messageInfo:string) {
    setTimeout(() => {
      this.processingForms = false;
      this.notification.showToast(type,titleInfo, messageInfo);
    }, 2000);
  }

  onSubmit(forms: NgForm) {
    this.curriculoService.send(this.forms).subscribe(
      (response: HttpResponse<IResponseApi>) => {
        if (response.status === 200) {
          this.unprocessForms(TypeToast.Success, 'Success', 'Curriculo enviado com sucesso');
          forms.reset();
        } else {
          this.unprocessForms(TypeToast.Error, 'Error', 'Erro ao enviar o currículo: ' + response.body?.error);
        }
      },
      (error) => {
        this.unprocessForms(TypeToast.Error, 'Error', 'Não foi possível enviar o seu currículo no momento, tente novamente mais tarde');
      }
    );
  }


  verificarTipoArquivo(curriculoFile: File): boolean {
    if (!curriculoFile) {
      this.fileValid = true;
      return true;
    }
  
    const tiposPermitidos = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
  
    if (tiposPermitidos.includes(curriculoFile.type)) {
      const tamanhoLimite = 1 * 1024 * 1024; // Limite de 1 MB, ajuste conforme necessário
      if (curriculoFile.size <= tamanhoLimite) {
        this.fileValid = true;
        return true;
      } else {
        this.fileValid = false;
        this.messageErrorFile = 'O arquivo deve ter no máximo 1 MB.';
        return false;
      }
    } else {
      this.fileValid = false;
      this.messageErrorFile = 'O arquivo deve ser um PDF ou um documento do Word.';
      return false;
    }
  }

  onFileChange(event: any) {
  const fileList = event.target.files;
  console.log(this.fileToSend);
/*   console.log(fileList);
  const input = event.target as HTMLInputElement;
  console.log(input);
  const label = event.currentTarget.files[0]
  console.log(label); */

  if (fileList.length > 0) {
    const curriculoFile: File = fileList[0];
    if (this.verificarTipoArquivo(curriculoFile)) {
      this.forms.curriculoFile = curriculoFile; // Set the selected file to the forms object
      console.log(this.fileToSend);
    } else {
      // Clear the input if file type is not valid
      event.target.value = null;
    }
  }
}
   
}


