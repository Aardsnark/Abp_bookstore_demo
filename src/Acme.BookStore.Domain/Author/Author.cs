using System;
using JetBrains.Annotations;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;

namespace Acme.BookStore.Authors;

public class Author : FullAuditedAggregateRoot<Guid>
{
    public string Name { get; private set; }
    //due to private set, Name can only be changed through constructor/initialization, or through ChangeName method (e.g. used by a Manager)

    public DateTime BirthDate { get; set; }
    public string ShortBio { get; set; }

    private Author()
    {
        /* This constructor is for deserialization / ORM purpose */
    }

    //internal = method can be used only in the Domain layer, like from a dedicated Manager
    internal Author(
        Guid id,
        [NotNull] string name,
        DateTime birthDate,
        [CanBeNull] string shortBio = null)
        : base(id)
    {
        SetName(name);
        BirthDate = birthDate;
        ShortBio = shortBio;
    }

    internal Author ChangeName([NotNull] string name)
    {
        SetName(name);
        return this;
    }

    private void SetName([NotNull] string name)
    {
        Name = Check.NotNullOrWhiteSpace(
            name,
            nameof(name),
            maxLength: AuthorConsts.MaxNameLength
        );
    }
}