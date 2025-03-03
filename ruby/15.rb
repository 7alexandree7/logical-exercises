pessoas  = ["Ana", "Pedro", "João", "Maria"]

encontrarPessoas = pessoas.find { |pessoa| pessoa.include?("Pedro")}
puts encontrarPessoas