FactoryBot.define do
  factory :user do
    email { 'jack_sparrow@example.com' }
    first_name { 'Jack' }
    last_name { 'Sparrow' }
    password { 'password' }
  end
end
