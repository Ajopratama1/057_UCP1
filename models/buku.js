module.exports = (sequelize, DataTypes) => {
  const Buku = sequelize.define('Buku', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    judul: {
      type: DataTypes.STRING,
    },
