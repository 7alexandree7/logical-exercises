def checkPalindromo(palavra)
  reverse = palavra.split('').reverse.join('')

  if reverse == palavra
    puts 'É palíndromo'
  else
    puts 'Não é palíndromo'
  end
end

checkPalindromo('arara') 
checkPalindromo('casa')  
