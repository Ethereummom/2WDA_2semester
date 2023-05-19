const Sequelize = require('sequelize');

class User extends Sequelize.Model {
  static initiate(sequelize) {
    User.init({
      usernumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      userid: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      phonenumber: {
        type: Sequelize.STRING(12),
        allowNull: true,
        unique : true,
      },
      point: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      snsId: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      snsId: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.User.belongsTo(db.Admin, {
      foreignKey: 'adminId' 
    });
  }
};

module.exports = User;