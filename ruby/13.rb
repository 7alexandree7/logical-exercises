idades = [12, 22, 15, 8, 16, 35, 61, 3, 19, 11, 10]

maior_que_16 = idades.select { |idade| idade >= 16}
puts maior_que_16