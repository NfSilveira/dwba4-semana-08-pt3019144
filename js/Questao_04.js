class Aluno {
  constructor(nome, sobrenome, nota1, nota2) {
    this.primeiroNome = nome;
    this.segundoNome = sobrenome;
    this.primeiraNota = nota1;
    this.segundaNota = nota2;     
  }
  nomeCompleto() {
	  return (this.primeiroNome + " " + this.segundoNome);
  }
  media(){
	  return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);	  
  }
  situacao(){
	  if (this.media() > 6){
		  return 'Aprovado';
	  }
	  return 'Reprovado';
  }
}

function criarMatrizAlunos(){
	var alunos = [
    new Aluno("João", "Silva", 7.5, 6.0),
    new Aluno("Maria", "Santos", 8.0, 7.5),
    new Aluno("Pedro", "Oliveira", 6.5, 8.5),
    new Aluno("Ana", "Ferreira", 9.0, 9.5),
    new Aluno("Lucas", "Pereira", 7.0, 6.5)
  ];
	
	alunos.forEach(mostrarAlunos);
}

function mostrarAlunos(item, index) {
	  alert("Nome completo: " + item.nomeCompleto() + "\n" + 
			"Média: " + item.media().toFixed(2) + "\n" + 
			"Situação: " + item.situacao());
}

criarMatrizAlunos();