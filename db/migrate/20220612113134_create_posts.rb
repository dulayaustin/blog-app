class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :content
      t.integer :status, default: 0
      t.datetime :published_at

      t.timestamps
    end
  end
end
