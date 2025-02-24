import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enviar-templates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enviar-templates.component.html',
  styleUrls: ['./enviar-templates.component.scss']
})
export class EnviarTemplatesComponent {
  constructor(private router: Router) {}

  selecionarTipo(tipo: string) {
    if (tipo === 'push') {
      return; // Não faz nada se for o tipo 'push'
    }
    console.log(`Tipo selecionado: ${tipo}`);
    // Exemplo de navegação:
    // this.router.navigate(['/criar-template', tipo]);
  }

  navegarParaTemplate(tipo: string) {

    if (tipo === 'email') {
      this.router.navigate(['admin', 'template-email']);
    }
  }
} 