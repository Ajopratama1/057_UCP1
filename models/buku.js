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
    pengarang: {
        type: DataTypes.STRING,
    },
    tahun_terbit: {
      type: DataTypes.STRING,

