# Overview

It is a simple blog app that was created on Ruby on Rails as the API backend and React as the frontend.

# Specs

* Ruby 3.1.2
* Rails 6.1.6
* React 18.1.0
* Bootstrap 5.1.3

# Setup

Clone the repository:
```sh
https://github.com/dulayaustin/blog-app.git
```

Bundle gems using gemset to be organized: (Optional) OR `bundle install` immediately.
- Install rbenv gemset https://github.com/jf/rbenv-gemset
```sh
rbenv install 3.1.2  # Install new ruby version (if you haven't already)
rbenv local 3.1.2    # Use newly installed ruby
rbenv gemset init    # Initialize gemset
rbenv rehash         # Refresh rbenv configs
rbenv gemset active  # Activate gemset
bundle install
```

Database creation and seed data:
```sh
rake db:create
rake db:migrate
```

Start up the containers for services such as Elasticsearch, PostgreSQL, etc using docker:
```sh
docker-compose up
```

Seed data:
```sh
rake db:seed
```

Hit me up on my email dulayaustin@gmail.com for `master.key`

Start the app:
```sh
rails s
```

Take note that the localhost port is 9000:
```sh
http://localhost:9000
```
