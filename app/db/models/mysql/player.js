/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('player', {
		playerId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'player_id'
		},
		teamId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'team',
				key: 'team_id'
			},
			field: 'team_id'
		},
		positionCode: {
			type: DataTypes.STRING(255),
			allowNull: false,
			references: {
				model: 'position',
				key: 'position_code'
			},
			field: 'position_code'
		},
		fullName: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'full_name'
		},
		dob: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'dob'
		},
		nationality: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'nationality'
		},
		height: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'height'
		},
		weight: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'weight'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'created_at'
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'updated_at'
		}
	}, {
		tableName: 'player'
	});
};
