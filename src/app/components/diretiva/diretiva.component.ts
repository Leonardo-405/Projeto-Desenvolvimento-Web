import { Component } from '@angular/core';
interface Tarefa{
  nome: string;
  numero: number;
  ativo: boolean;
}
@Component({
  selector: 'app-diretiva',
  templateUrl: './diretiva.component.html',
  styleUrl: './diretiva.component.css'
})
export class DiretivaComponent {
  tarefas: Tarefa[] = [
    {nome: 'Estudar', numero: 1, ativo: true},
    {nome: 'Treinar', numero: 2, ativo: true},
    {nome: 'Jogar', numero: 3, ativo: false}
  ]
  ativar(Tarefa:Tarefa){
    Tarefa.ativo = !Tarefa.ativo;

  }

}
