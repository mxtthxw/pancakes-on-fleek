json.array!(@pancakes) do |pancake|
  json.extract! pancake, :id, :name, :description, :price, :stock
  json.url pancake_url(pancake, format: :json)
end
