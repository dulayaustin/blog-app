class Api::V1::PostsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    posts = Post.all

    render json: serialize(posts, PostSerializer.options)
  end

  def show
    render json: serialize(post, PostSerializer.options)
  end

  def create
    post = current_user.posts.new(post_params)

    if post.save
      render json: serialize(post), status: :created
    else
      render json: post.errors, status: :unprocessable_entity
    end
  end

  def update
    if post.update(post_params)
      render json: serialize(post)
    else
      render json: post.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if post.destroy
      head :no_content
    else
      render json: post.errros, status: :unprocessable_entity
    end
  end

  private

  def post
    @post ||= Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :content, :status)
  end
end