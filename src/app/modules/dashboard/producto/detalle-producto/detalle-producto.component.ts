import { Router, ActivatedRoute } from '@angular/router';
//import { ProductoService } from './../services/producto.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

//import { Producto } from '../models/producto';
//import { ProductoService } from '../../../services/producto.service';
//import { Producto } from '../../../models/producto';
import { Producto } from '../../../../models/producto';
import { ProductoService } from '../../../../services/producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  producto!: Producto;

  constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.productoService.detail(id).subscribe(
      data => {
        this.producto = data;
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/lista']);
  }

}
