class UserSerializer < ActiveModel::Serializer
  attributes :id, :fullname, :image, :is_owner, :email, :username, :password
  end