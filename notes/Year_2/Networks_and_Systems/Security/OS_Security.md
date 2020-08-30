---
title: Operating System Security and Access Control
---

# Access Control

-   Your computer contains lots of subjects (typically users, people)
    and lots of objects (typically documents, images, programs

-   Who chooses access rights?

    -   The file owner - Mandatory Access Control (MAC)

    -   The system owner - Discretionary Access Control (DAC)

    -   Anyone who has rights

-   What/how/where do we store access permissions? Multiple approaches

# Access Control Matrix (ACM)

-   Easy to define, easy to verify

-   Poor scalability, poor handling of changes, could get corrupted

![image](/img/Year_2/Networks_and_Systems/Security/OS/ACM.webp)

Dashes represent no access rights

Append typically used for log files

# Access Permissions

\*NIX has 8 access permission settings for 3 types of users

-   Owners, Groups and Others

-   Combination of read(r), write(w), and execute (x)

-   Represented as numbers in base 8

![image](/img/Year_2/Networks_and_Systems/Security/OS/permission.webp)

`chown` and `chmod` can be used to modify access permissions

# setuid, setgid, and sticky bits

**setuid bit**: Users run executable with permissions of the executable
owner

**sticky bit**: Prevents users with write/execute permissions from
deleting the directory contained files (typically on `tmp` folder)

# \*NIX Permissions to ACM

![image](/img/Year_2/Networks_and_Systems/Security/OS/permission1.webp)

# Link Vulnerabilities

-   Add new path to an inode

-   Multiple names for a single inode

-   For example, to overwrite /etc/password

```
ln -s /etc/passwd file
trusted_dump file < *passwd-entry*
```

e.g. a command which can read/write root owned files, but doesn’t
know the file is /etc/passwd

-   Programs have to be aware of which files they are using

-   `0_NOFOLLOW` flag can be added to prevent following links e,g.
    `open(file, 0_NOFOLLOW, mode)`

# Hardening (Not examined)

-   SELinux - Make sure that programs only access what they’re meant to

-   AppArmor - Similar but simpler than SE linux

# Device File Vulnerabilities

Devices are represented as files

-   `/dev/tty` - terminal

-   `/dev/mem` - physical memory

-   `/dev/kmem` - virtual memory

-   `/dev/mouse` - mouse

Created using mknod (only accessible by root)

-   Can bypass access control by getting access to memory

-   Can get access to user inputs

# Access Control Lists

-   Store by column (object focused)

-   Easy to view object access control, easy to remove access rights if
    object removed

-   Poor overview of access rights per subject, difficult to remove
    subject

![image](/img/Year_2/Networks_and_Systems/Security/OS/ACL.webp)

# Capability-based Security

-   Store by row (subject-focused)

-   Easy to transfer ownership, easy inheritance of access rights

-   Poor overview of access rights per object, difficulty of revocation
    of object

![image](/img/Year_2/Networks_and_Systems/Security/OS/capability.webp)

# Windows

-   Windows registry

    -   Core place for system control

    -   Target for hackers

    -   Controls multiple computers

-   Windows domain

    -   Computers sharing things such as passwords

-   Principles

    -   SAM format - old but used in most places

    -   UPN - more modern

-   Login - Happens in different ways depending if the computer is alone
    or part of a network

-   More levels than \*NIX

    -   Hardware, System, Administrator, Users

-   Library loading is a problem

-   Viruses are very common and easy

-   Windows adding features to make OS less predictable

    -   Image randomization (OS boots in one of 256 configurations)

    -   Services restart if failed (not the best practise for security)

        -   Vista+ sets some critical services to only restart twice,
            then manual restart

-   NTFS is much more secure than FAT32 & DOS

    -   Adds two ACLs:

        -   DACL: Reading, writing, executing, deleting by which users
            or groups

        -   SACL: for defining which actions are audited/logged, e.g.on
            activity being successful/failed

    -   Compression, encryption

# Bell-LaPadula Model

Bell-LaPadula confidentiality policy, "read down, write up"

-   Simple security property

    -   Subject (Greg) cannot read object of higher sensitivity

-   Star property (\* property)

    -   Subject cannot write to object of lower sensitivity. This is
        because Greg might know things that shouldn’t be able to be
        accessed by people of lower security

-   Strong star property (Strong \* Property)

![image](/img/Year_2/Networks_and_Systems/Security/OS/Bell-LaPadula.webp)

# Biba integrity model

Biba integrity model - "read up, write down"

-   Simple Security property

    -   Subject (Greg) cannot read object of lower integrity (can only
        read data that is as good or better than his)

-   Star property (\* property)

    -   Subject cannot write to object of higher integrity (can only
        write data that is as good or worse than his)

-   Invocation property

    -   Subject/process cannot request higher integrity access

![image](/img/Year_2/Networks_and_Systems/Security/OS/biba.webp)

# Clark-Wilson Integrity Model

-   Bell-LaPadula is good for confidential systems

-   Biba is good for integrity-preserving systems

-   What about businesses/industry processes where you need both?
    Clark-Wilson Model

    -   Limits direct interaction between subjects and objects

    -   Prevent unauthorized subjects from modifying objects

    -   Prevent authorized subjects from making invalid modifications to
        objects

    -   Maintain internal/external consistency

![image](/img/Year_2/Networks_and_Systems/Security/OS/Clark-Wilson.webp)

# Protection Rings

-   Hardware based access control - also used to protect data and
    functionality from faults

-   Each subject and object are assigned a number based on importance

-   Decisions are made by comparing numbers (if subject $<$ object,
    disallow access)

-   x86 CPUs offer four rings, but typically (Windows/UNIX) only two
    (0,3) are used

-   ARM implements 3 levels (application, operating system and
    hypervisor)

![image](/img/Year_2/Networks_and_Systems/Security/OS/protection_ring.webp)

# Securing BIOS and Bootloader

BIOS should have a password for changing the settings

-   If you have physical access, then you can reset BIOS easily by
    resetting the CMOS

-   So lock the machine physically (require a key)

Bootloader (e.g. GRUB) should have a password for changing the settings
