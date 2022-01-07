class CreateOccupations < ActiveRecord::Migration[6.0]
  def change
    create_table :occupations do |t|
      t.text :description
      t.string :activity

      t.timestamps
    end
  end
end
