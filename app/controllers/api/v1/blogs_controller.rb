class Api::V1::BlogsController < ApplicationController
  before_action :set_blog, only: %i[ show update destroy ]

  def index
    blogs = Blog.all

    render json: serialize(blogs)
  end

  def show
    render json: serialize(@blog)
  end

  def create
    blog = Blog.new(blog_params)

    if blog.save
      render json: serialize(blog)
    else
      render json: blog.errors, status: :unprocessable_entity
    end
  end

  def update
    if @blog.update(blog_params)
      render json: serialize(@blog)
    else
      render json: blog.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @blog.destroy
      head :no_content
    else
      render json: @blog.errros, status: :unprocessable_entity
    end
  end

  private

  def set_blog
    @blog = Blog.find(params[:id])
  end

  def blog_params
    params.require(:blog).permit(:title, :content, :status)
  end
end