-- CreateTable
CREATE TABLE "pools" (
    "id" SERIAL NOT NULL,
    "address" VARCHAR(50) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "is_closed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "pools_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pools_address_key" ON "pools"("address");
