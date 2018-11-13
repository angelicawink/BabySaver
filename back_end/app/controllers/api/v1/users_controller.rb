class Api::V1::UsersController < ApplicationController
  before_action :find_user, only: [:show]

  def index
    @users = User.all
    render json: @users
  end

  def show
    render json: @user
  end

  def create
    render json: User.create(user_params)
  end

  def verify
    if User.where("username = #{params[:name]}")
      render json: 'you are logged in'
    else
      render json: 'alert: access denied'
    end
  end

  private

  def user_params
    params.require(:user).permit(:name)
  end

  def find_user
    @user = User.find(params[:id])
  end

end
