import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="d-flex">
      <!-- Sidebar -->
      <div class="sidebar" style="background-color: #212b36; width: 250px; min-height: 100vh;">
        <div class="p-3">
          <h5 class="text-white mb-4">Admin Panel</h5>
          <div class="nav flex-column">
            <a routerLink="/admin/enviar-templates" 
               routerLinkActive="active"
               class="nav-link text-white mb-2">
              Enviar Templates
            </a>
            <a routerLink="/admin/templates-enviados" 
               routerLinkActive="active"
               class="nav-link text-white">
              Templates Enviados
            </a>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex-grow-1">
        <!-- Toolbar -->
        <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom">
          <div class="container-fluid">
            <div class="ms-auto">
              <div class="dropdown">
                <button class="btn btn-light dropdown-toggle" 
                        type="button" 
                        data-bs-toggle="dropdown" 
                        aria-expanded="false">
                  Usuário
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><a class="dropdown-item" href="#">Perfil</a></li>
                  <li><a class="dropdown-item" href="#">Configurações</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Sair</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <!-- Page Content -->
        <div class="p-4">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .sidebar .nav-link {
      padding: 0.5rem 1rem;
      border-radius: 4px;
    }
    .sidebar .nav-link:hover {
      background-color: rgba(255,255,255,0.1);
    }
    .sidebar .nav-link.active {
      background-color: rgba(255,255,255,0.1);
    }
  `]
})
export class AdminLayoutComponent {} 