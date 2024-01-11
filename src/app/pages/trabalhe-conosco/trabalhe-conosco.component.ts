import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CurriculoService } from 'src/app/core/services/currciulo.service';
import { FormsService } from 'src/app/core/services/forms.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { FormsI } from 'src/app/shared/models/FormsI';
import { FormsTrabalheConoscoI } from 'src/app/shared/models/FormsTrabalheConoscoI';
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
    curriculoFile: null,
    lgpd: false
  }

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

  processForms() {
    this.processingForms = true;

  }
  public unprocessForms(type:TypeToast, titleInfo:string, messageInfo:string) {
    setTimeout(() => {
      this.processingForms = false;
      this.notification.showToast(type,titleInfo, messageInfo);
    }, 2000);
  }

  onSubmit(forms:NgForm){
      this.curriculoService.send(forms.value).subscribe(
      response => {        
        this.unprocessForms(TypeToast.Success,'Success','Curriculo enviado com sucesso');
        forms.reset();
      },
      error => {
        this.unprocessForms(TypeToast.Error,'Error','Não foi possivel enviar o seu curriculo no momento, tente novamente mais tarde');
      }
  )};


  verificarTipoArquivo(curriculoFile: File | null): boolean {
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
      // Exemplo: Mensagem de erro específica para o tipo de arquivo
      this.messageErrorFile = 'O arquivo deve ser um PDF ou um documento do Word.';
      return false;
    }
  }

  onFileChange(event: any) {
  const fileList: FileList = event.target.files;
  if (fileList.length > 0) {
    const curriculoFile: File = fileList[0];
    if (!this.verificarTipoArquivo(curriculoFile)) {
      // Limpar o input de arquivo se o tipo não for válido
      event.target.value = null;
    }
  }
}
   
}

