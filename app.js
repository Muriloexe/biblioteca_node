const books = require('./database')
    const readline = require('readline-sync')

    nome = String(readline.question("Qual o seu nome?"))
        console.log(`Bom dia ${nome} seja bem-vindo(a)!`)

   let s 
   let n  

    var procurar = readline.question('Deseja procurar algum livro? s/n ')
        if(procurar == "s"){
            console.table(books)
            var autoria = String(readline.question('Qual o nome do autor?'))

           var cadastrados = books.filter((obj) =>   obj.author == autoria ,
                console.log("Estes são os livros disponíveis:"))
                 console.table(cadastrados)
                    }else if (procurar == "n"){
                console.log("Caso mude de ideia, estamos por aqui")
    }
  