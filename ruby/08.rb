while true
  num_randomico = rand(1..10)

  puts 'Digite um numero para ver se acerta'
  puts 'tente adinhar o numero do computador'
  numUser = gets.chomp.to_i

  if numUser == num_randomico
    puts 'parabens voce acertou'
    break

  else
    puts "Você errou! O número correto era #{num_randomico}. Tente novamente."
  end
end


