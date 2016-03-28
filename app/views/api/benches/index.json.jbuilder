

json.array!(@benches) do |bench|
  json.lat bench.lat
  json.lng bench.lng
  json.description bench.description
end
