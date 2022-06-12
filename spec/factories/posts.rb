FactoryBot.define do
  factory :post do
    title { 'A valid title' }
    content { 'A valid content' }
    status { 0 }
  end
end
