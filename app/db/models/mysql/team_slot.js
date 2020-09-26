/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('teamSlot', {
		teamSlotId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'team_slot_id'
		},
		teamId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
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
		playerType: {
			type: DataTypes.ENUM('main','substitute'),
			allowNull: false,
			defaultValue: 'main',
			field: 'player_type'
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
		tableName: 'team_slot'
	});
};
