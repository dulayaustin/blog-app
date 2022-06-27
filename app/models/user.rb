class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise devise :database_authenticatable,
                :jwt_authenticatable,
                :registerable,
                jwt_revocation_strategy: JwtDenylist

  validates :email, :first_name, :last_name, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :email, uniqueness: true

  has_many :posts, dependent: :destroy
end
