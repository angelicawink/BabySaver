class UserSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :games
  has_many :babies, through: :games
end
