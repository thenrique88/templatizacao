import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-template-email',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    NgbModule
  ],
  templateUrl: './template-email.component.html',
  styleUrls: ['./template-email.component.scss']
})
export class TemplateEmailComponent implements OnInit {
  conteudoPrincipalForm: FormGroup = new FormGroup({});
  bannerPrincipalForm: FormGroup = new FormGroup({});
  bannerSecundarioForm: FormGroup = new FormGroup({});
  bannerCoringaForm: FormGroup = new FormGroup({});
  itensForm: FormGroup = new FormGroup({});
  
  isCollapsed: { [key: string]: boolean } = {
    conteudoPrincipal: false,
    bannerPrincipal: true,
    bannerSecundario: true,
    bannerCoringa: true,
    itens: true
  };

  constructor(private fb: FormBuilder) {
    this.inicializarFormularios();
  }

  ngOnInit(): void {}

  toggleCollapse(section: string) {
    this.isCollapsed[section] = !this.isCollapsed[section];
  }

  private inicializarFormularios() {
    this.conteudoPrincipalForm = this.fb.group({
      idTemplate: [''],
      versaoTemplate: [''],
      temaCampanha: [''],
      assuntoEmail: [''],
      preHeader: ['']
    });

    this.bannerPrincipalForm = this.fb.group({
      bpImagem: [''],
      bpTexto: [''],
      bpBotao: [''],
      bpLink: ['']
    });

    this.bannerSecundarioForm = this.fb.group({
      bsImagem: [''],
      bsTexto: [''],
      bsBotao: [''],
      bsLink: ['']
    });

    this.bannerCoringaForm = this.fb.group({
      bcImagem: [''],
      bcTexto: [''],
      bcBotao: [''],
      bcLink: ['']
    });

    this.itensForm = this.fb.group({
      items: this.fb.array([])
    });
  }

  get itensFormArray() {
    return this.itensForm.get('items') as FormArray;
  }

  adicionarItem() {
    if (this.itensFormArray.length >= 4) {
      return; // Não permite adicionar mais que 4 itens
    }
    
    const item = this.fb.group({
      imagem: [''],
      titulo: [''],
      texto: [''],
      botao: [''],
      link: ['']
    });
    this.itensFormArray.push(item);
  }

  removerItem(index: number) {
    this.itensFormArray.removeAt(index);
  }

  salvarTemplate() {
    const templateCompleto = {
      conteudoPrincipal: this.conteudoPrincipalForm.value,
      bannerPrincipal: this.bannerPrincipalForm.value,
      bannerSecundario: this.bannerSecundarioForm.value,
      bannerCoringa: this.bannerCoringaForm.value,
      itens: this.itensForm.value.items
    };
    console.log('Template a ser salvo:', templateCompleto);
    // Implementar lógica de salvamento
  }
}
