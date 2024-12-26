import { randomBytes, pbkdf2 } from 'crypto';

type VerifyPasswordProps = {
    password: string;
    salt: string;
    hash: string;
    iterations: number;
};

type VerifyPassword = (props: VerifyPasswordProps) => Promise<boolean>;

export const verifyPassword: VerifyPassword = ({ password, salt, hash, iterations }) => {
    return new Promise((resolve, reject) => {
        pbkdf2(password, salt, iterations, hash.length, 'sha512', (err, key) => {
            if (err) {
                reject(err);
            } else {
                resolve(key.toString('base64') === hash);
            }
        });
    });
};

type SaltAndHashPassword = (password: string) => Promise<{
    salt: string;
    hash: string;
    iterations: number;
}>;

export const saltAndHashPassword: SaltAndHashPassword = (password: string) => {
    return new Promise((resolve, reject) => {
        const salt = randomBytes(128).toString('base64');
        const iterations = 10000;
        const keylen = 64;
        const digest = 'sha512';

        pbkdf2(password, salt, iterations, keylen, digest, (err, key) => {
            if (err) {
                reject(err);
            } else {
                resolve({
                    salt,
                    hash: key.toString('base64'),
                    iterations
                });
            }
        });
    });
};