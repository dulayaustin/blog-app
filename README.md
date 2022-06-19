# Overview

It is a simple blog app that is created on Ruby on Rails as the backend and React as the frontend.

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

Bundle gems using gemset: (Optional)
- Install rbenv gemset https://github.com/jf/rbenv-gemset
- Install new ruby version: `rbenv install 3.1.2`
- Use newly installed ruby: `rbenv local 3.1.2`
- Initialize gemset: `rbenv gemset init`
- Refresh rbenv configs: `rbenv rehash`
- Activate gemset: `rbenv gemset active`
- Then `bundle install`

Database creation and seed data:
```sh
rake db:create
rake db:migrate
rake db:seed
```

Start up the containers for services such as Elasticsearch, PostgreSQL, etc using docker:

```sh
docker-compose up
```

Start the app:
```sh
rails s
```

Take note that the localhost port is 9000:
```sh
http://localhost:9000
```
