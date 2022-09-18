import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]',
})
export class ErrMsgDirective implements OnInit {
  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(valor: string) {
    this._color = valor;
    this.setColor();
  }
  @Input() set mensaje(valor: string) {
    this._mensaje = valor;
    this.setMensaje();
  }

  constructor(private _el: ElementRef<HTMLElement>) {
    this.htmlElement = _el;
  }

  ngOnInit(): void {
    this.setMensaje();
    this.setEstilo();
    this.setColor();
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }
}
