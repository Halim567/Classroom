"use client";

import { Case, Switch } from "@/components/control-flow";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Home() {
    const [role, setRole] = React.useState('Admin');
    const data = ["Admin", "User", "Guest", "Super Admin"];

    return (
        <div>
            <Button onClick={() => setRole(data[Math.floor(Math.random() * data.length)])}>Change</Button>

            <Switch value={role} default={<div>Guest</div>}>
                <Case when={'Admin'}>
                    <div>Admin</div>
                </Case>
                <Case when={'User'}>
                    <div>User</div>
                </Case>
                <Case when={'Super Admin'}>
                    <div>Super Admin</div>
                </Case>
            </Switch>
        </div>
    );
}
