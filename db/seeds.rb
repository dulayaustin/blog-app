# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.create(
  [
    {
      title: "Your Step-by-Step Guide to Choosing Where to Get Care",
      content: "It is a fresh Saturday morning; you just ordered a fresh cup of coffee at the closest coffee shop. That is when it happens - you trip on the curb leading into the café, falling and hurting your leg. It's clear that you need to see a doctor, but where should you go?",
      status: 0,
    },
    {
      title: "Guidelines for Travel to the Philippines (Non-OFWs and Foreign Nationals)",
      content: "Update: Effective 1 April 2022, fully vaccinated passport holders from non-visa required countries, HK and Macau SAR passport holders (for stay period not exceeding 14 days), diplomatic and official/service passports with existing visa waiver agreements, and foreign nationals with valid visas shall be allowed entry into the Philippines provided they:",
      status: 1,
    },
    {
      title: "Everything You Need to Hit the Open Road in Search of Waves",
      content: "We put together a cool list of simple gear for highway miles to pair with podcasts, exit ramps and evening glass offs. This isn't rugged equipment to be self-sufficient, it's affordable gear to keep you dry, organized and not putting on a stinky, soaked wetsuit before your second session each day. Use this as a checklist for your next road trip.",
      status: 2,
    }
  ]

)