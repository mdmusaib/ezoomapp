-- AlterTable
ALTER TABLE "users" ADD COLUMN     "brandColor" TEXT NOT NULL DEFAULT E'#2C4FFF';
UPDATE "users" SET "brandColor" = '#2C4FFF';
