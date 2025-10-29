import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-entrega-form',
  standalone: false,
  templateUrl: './detalle-entrega-form.component.html',
  styleUrl: './detalle-entrega-form.component.css'
})
export class DetalleEntregaFormComponent implements OnInit {

  entregaForm: FormGroup;
  idEntrega: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private aRoute: ActivatedRoute
  ) {
    this.entregaForm = this.fb.group({
      // Información General del Pedido
      codigoPedido: [''],
      id: [''],
      fechaActual: [''],
      fechaPedido: [''],
      fechaEstado: [''],
      estadoActual: [''],
      
      // Detalle de Pedido
      numeroPedido: [''],
      fechaRegistro: [''],
      estado: [''],
      descripcionProducto: [''],
      
      // Detalle de Cliente
      nombre: [''],
      correo: [''],
      direccion: [''],
      telefono: [''],
      tipoDocumento: [''],
      numeroDocumento: ['']
    });
    
    this.idEntrega = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    // Aquí podrías cargar datos si el ID existe
    if (this.idEntrega) {
      this.cargarDatosEntrega();
    }
  }

  cargarDatosEntrega(): void {
    // Simular carga de datos
    this.entregaForm.patchValue({
      codigoPedido: 'PED001',
      id: this.idEntrega,
      fechaActual: new Date().toLocaleDateString(),
      fechaPedido: new Date().toLocaleDateString(),
      fechaEstado: new Date().toLocaleDateString(),
      estadoActual: 'En proceso',
      numeroPedido: 'PED-2024-001',
      fechaRegistro: new Date().toLocaleDateString(),
      estado: 'Pendiente',
      descripcionProducto: 'Producto de ejemplo',
      nombre: 'Cliente Ejemplo',
      correo: 'cliente@ejemplo.com',
      direccion: 'Dirección de ejemplo',
      telefono: '123456789',
      tipoDocumento: 'DNI',
      numeroDocumento: '12345678'
    });
  }

  guardar(): void {
    if (this.entregaForm.valid) {
      console.log('Datos del formulario:', this.entregaForm.value);
      // Aquí implementarías la lógica para guardar
      alert('Formulario guardado exitosamente');
    } else {
      alert('Por favor complete todos los campos requeridos');
    }
  }

  cancelar(): void {
    this.router.navigate(['/entregas']);
  }
}
