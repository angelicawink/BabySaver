class User < ApplicationRecord
  has_many :games
  has_many :babies, through: :games
end
