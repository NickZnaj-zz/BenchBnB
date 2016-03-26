

json.array!(@benches) do |bench|
  json.lat bench.lat
  json.long bench.long
  json.description bench.description
end
