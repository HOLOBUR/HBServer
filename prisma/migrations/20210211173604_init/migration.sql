-- DropForeignKey
ALTER TABLE `link` DROP FOREIGN KEY `link_ibfk_1`;

-- AddForeignKey
ALTER TABLE `Link` ADD FOREIGN KEY (`postedById`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
