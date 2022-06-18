class AddIndicesToPosts < ActiveRecord::Migration[6.1]
  def change
    add_index :posts, :title
    add_index :posts, :status
  end
end
