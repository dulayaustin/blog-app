class Api::V1::PostsController < ApplicationController
  before_action :set_post, only: %i[ show update destroy ]

  def index
    posts = Post.all

    render json: serialize(posts)
  end

  def show
    render json: serialize(@post)
  end

  def create
    post = Post.new(post_params)

    if post.save
      render json: serialize(post)
    else
      render json: post.errors, status: :unprocessable_entity
    end
  end

  def update
    if @post.update(post_params)
      render json: serialize(@post)
    else
      render json: post.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @post.destroy
      head :no_content
    else
      render json: @post.errros, status: :unprocessable_entity
    end
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :content, :status)
  end
end