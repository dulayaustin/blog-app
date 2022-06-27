class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise devise :database_authenticatable,
                :jwt_authenticatable,
                :registerable,
                jwt_revocation_strategy: JwtDenylist

  validates :email, presence: true

  has_many :posts, dependent: :destroy
end
