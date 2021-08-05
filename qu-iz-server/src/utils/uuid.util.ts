import crypto from 'crypto';

function GenerateUUID(length: number): string {
  return crypto.randomBytes(length / 2).toString('hex');
}

export default GenerateUUID;
