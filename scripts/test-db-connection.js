// Simple script to test database connection
// Run with: node scripts/test-db-connection.js
// Or with dotenv: npx dotenv -e .env.local -- node scripts/test-db-connection.js

require('dotenv').config({ path: '.env.local' })
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
})

async function testConnection() {
  try {
    console.log('🔌 Testing database connection...\n')
    
    // Test 1: Check if we can connect
    await prisma.$connect()
    console.log('✅ Database connection successful!\n')
    
    // Test 2: Check if table exists by counting records
    const count = await prisma.demoRequest.count()
    console.log(`✅ Table 'demo_requests' exists and is accessible`)
    console.log(`   Current record count: ${count}\n`)
    
    // Test 3: Try to create a test record
    console.log('🧪 Creating test record...')
    const testRecord = await prisma.demoRequest.create({
      data: {
        email: 'test@example.com',
        name: 'Test User',
        hearAboutUs: 'Testing connection',
      },
    })
    console.log('✅ Test record created successfully!')
    console.log(`   ID: ${testRecord.id}`)
    console.log(`   Email: ${testRecord.email}`)
    console.log(`   Name: ${testRecord.name}\n`)
    
    // Test 4: Delete the test record
    await prisma.demoRequest.delete({
      where: { id: testRecord.id },
    })
    console.log('✅ Test record cleaned up\n')
    
    console.log('🎉 All tests passed! Database is ready for use.')
    
  } catch (error) {
    console.error('❌ Error testing database connection:')
    console.error(error.message)
    
    if (error.code === 'P1001') {
      console.error('\n💡 Tip: Check your DATABASE_URL in .env.local')
      console.error('   Make sure the connection string is correct and the database is accessible.')
    } else if (error.code === 'P2002') {
      console.error('\n💡 Tip: This might be a unique constraint error')
    } else if (error.code === 'P2025') {
      console.error('\n💡 Tip: Record not found - this is normal for cleanup')
    }
    
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

testConnection()

