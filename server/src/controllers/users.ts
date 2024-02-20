import express, { Request, Response } from 'express';
import connection from '../connection';

// const getAllUsers = async (req: Request, res: Response) => {
//     connection.query( 'SELECT * FROM users', (error, results, fields) => {
//         if (error){
//             res.status(500).send('Internal Server Error');
//             throw error
//             return
//         };
//         res.status(200)
//         return res.json(results);
//     })
// }
const getAllUsers = async (req: Request, res: Response) => {
    try {
        await connection.query( 'SELECT * FROM users', (error, results, fields) => {
            if (error){
                res.status(500).send('Internal Server Error');
                throw error
                return
            };
            
            res.status(200)
            return res.json(results);
        })
        
    } catch (error:any) {
        res.status(500)
        return res.json({error: 'Failed to get users with unexpected error: ${error}'})
    }
}

const newUser = async (req: Request, res: Response) => {
    const {usrn, pswd}: {usrn: string; pswd: string} = req.body;
    const query = 'INSERT INTO users (usernam, password) VALUES (?, ?)';

    try {
        await connection.query(query, [usrn,pswd], (error, result, fields) =>{
            console.log("hi")
            res.status(200)
            return res.json({id: result.insertId, usrn, pswd});
        })
    }catch (error: any){
        res.status(500)
        return res.json({error: 'Failed to get users with unexpected error: ${error}'})
    }
}

export  {getAllUsers, newUser};

