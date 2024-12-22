puts 'Digite a primeira palavra'
string01 = gets.chomp

puts 'Digite a segunda palavra'
string02 = gets.chomp

puts 'Digite a terceira palavra'
string03 = gets.chomp

myArray = Array.new 
myArray.push(string01, string02, string03)
puts "Array: #{myArray.inspect}"