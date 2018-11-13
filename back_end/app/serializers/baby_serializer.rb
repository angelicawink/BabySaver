class BabySerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url, :onShelf
  has_many :games
end
